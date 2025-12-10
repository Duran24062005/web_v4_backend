import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types/models.js';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('Error:', err);

  const response: ApiResponse<null> = {
    success: false,
    error: err.message || 'Error interno del servidor'
  };

  res.status(500).json(response);
};

export const notFoundHandler = (
  req: Request,
  res: Response
): void => {
  const response: ApiResponse<null> = {
    success: false,
    message: `Ruta no encontrada: ${req.method} ${req.url}`
  };

  res.status(404).json(response);
};