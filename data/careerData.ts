import type { CareerPath } from '../types';
import { frontendDeveloper } from './frontendDeveloper';
import { backendDeveloper } from './backendDeveloper';
import { uiuxDesigner } from './uiuxDesigner';
import { dataScientist } from './dataScientist';
import { mlEngineer } from './mlEngineer';
import { aiEngineer } from './aiEngineer';
import { javaDeveloper } from './javaDeveloper';
import { devopsEngineer } from './devopsEngineer';
import { devsecopsEngineer } from './devsecopsEngineer';
import { gitopsEngineer } from './gitopsEngineer';
import { fullstackDeveloper } from './fullstackDeveloper';
import { mobileDeveloper } from './mobileDeveloper';
import { qaEngineer } from './qaEngineer';
import { cloudEngineer } from './cloudEngineer';
import { gameDeveloper } from './gameDeveloper';
import { cybersecurityAnalyst } from './cybersecurityAnalyst';
import { productManager } from './productManager';


export const CAREER_PATHS: CareerPath[] = [
  // Development Roles
  frontendDeveloper,
  backendDeveloper,
  fullstackDeveloper,
  mobileDeveloper,
  gameDeveloper,
  javaDeveloper,
  
  // Design & Product
  uiuxDesigner,
  productManager,

  // QA & Operations
  qaEngineer,
  devopsEngineer,
  devsecopsEngineer,
  gitopsEngineer,
  cloudEngineer,
  cybersecurityAnalyst,

  // Data & AI
  dataScientist,
  mlEngineer,
  aiEngineer,
];