export const authMiddleware = (req, res, next) => {
    const { ROLE } = req.query;
    if (ROLE == 'ADMIN') {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized' });
    }
    
}