import { Request, Response, NextFunction } from 'express';

export const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  
  if (amount === undefined) return res.status(400).json({ error: 'Amount is required' });
  
  if (typeof amount !== 'string') return res.status(422).json({ error: 'Amount must be a string' });

  if (amount.length <= 2) {
    return res.status(422).json(
      { error: 'Amount must be longer than 2 characters' },
    );
  }

  next();
};

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
      
  if (name === undefined) return res.status(400).json({ error: 'Name is required' });
      
  if (typeof name !== 'string') return res.status(422).json({ error: 'Name must be a string' });
    
  if (name.length <= 2) {
    return res.status(422).json(
      { error: 'Name must be longer than 2 characters' },
    );
  }
    
  next();
};