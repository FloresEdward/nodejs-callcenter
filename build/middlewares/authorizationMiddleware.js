"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorizationMiddleware(req, resp, next) {
    const urlPath = req.url;
    const authorizationToken = req.headers['authorization'];
    if (req.url.startsWith('/api') && !authorizationToken) {
        resp.status(401).json({ message: 'Invalid_authorization_token' });
        return;
    }
    next();
}
exports.default = authorizationMiddleware;
