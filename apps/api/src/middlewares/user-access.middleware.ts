import { UserRole, type UserRole as UserRoleType } from "@workspace/core/enums";
import { UserModel } from "@workspace/db/models";
import type { NextFunction, Request, RequestHandler, Response } from "express";

export type RequestActor = {
    id: string;
    role: UserRoleType;
    isAdmin: boolean;
};

type UserParams = { id: string };

function isAdminRole(role: UserRoleType): boolean {
    return role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN;
}

export function getRequestActor(res: Response): RequestActor {
    return res.locals.actor as RequestActor;
}

export const authenticateUser: RequestHandler = async (req, res, next) => {
    try {
        const userId = req.get("x-user-id")?.trim();

        if (!userId) {
            res.status(401).json({ error: "x-user-id header is required" });
            return;
        }

        const user = await UserModel.findOne({ _id: userId, isDelete: { $ne: true } })
            .select("_id role")
            .lean()
            .exec();

        if (!user) {
            res.status(401).json({ error: "Authenticated user not found" });
            return;
        }

        res.locals.actor = {
            id: String(user._id),
            role: user.role,
            isAdmin: isAdminRole(user.role),
        } satisfies RequestActor;

        next();
    } catch (error) {
        next(error);
    }
};

export const requireAdmin: RequestHandler = (_req, res, next) => {
    const actor = getRequestActor(res);

    if (!actor.isAdmin) {
        res.status(403).json({ error: "Admin access is required" });
        return;
    }

    next();
};

export function requireSelfOrAdmin(
    req: Request<UserParams>,
    res: Response,
    next: NextFunction,
): void {
    const actor = getRequestActor(res);

    if (!actor.isAdmin && actor.id !== req.params.id) {
        res.status(403).json({ error: "You can only access your own user data" });
        return;
    }

    next();
}
