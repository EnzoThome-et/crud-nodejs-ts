import { Request, Response, NextFunction } from 'express';

export const validateUserName = (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  const { username } = userInfo;

  if (!username) return res.status(400).json({ error: 'Username is required' });
  if (typeof username !== 'string') {
    return res.status(422).json(
      { error: 'Username must be a string' },
    );
  }
  if (username.length <= 2) {
    return res.status(422).json(
      { error: 'Username must be longer than 2 characters' },
    );
  }

  next();
};

export const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  const { classe } = userInfo;
  
  if (!classe) return res.status(400).json({ error: 'Classe is required' });
  if (typeof classe !== 'string') {
    return res.status(422).json(
      { error: 'Classe must be a string' },
    );
  }
  if (classe.length <= 2) {
    return res.status(422).json(
      { error: 'Classe must be longer than 2 characters' },
    );
  }
  
  next();
};

export const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  const { level } = userInfo;

  if (level <= 0) {
    return res.status(422).json(
      { error: 'Level must be greater than 0' },
    );
  }
    
  if (!level) return res.status(400).json({ error: 'Level is required' });

  if (typeof level !== 'number') {
    return res.status(422).json(
      { error: 'Level must be a number' },
    );
  }
    
  next();
};

export const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  const { password } = userInfo;
      
  if (!password) return res.status(400).json({ error: 'Password is required' });
  if (typeof password !== 'string') {
    return res.status(422).json(
      { error: 'Password must be a string' },
    );
  }
  if (password.length < 8) {
    return res.status(422).json(
      { error: 'Password must be longer than 7 characters' },
    );
  }
      
  next();
};
