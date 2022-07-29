import { CompanyInfo } from "./companyInfo";
import { CustomerInfo } from "./customerInfo";
import { Item } from "./item";

export type Invoice = {
  tax?: number;
  invoiceNumber: string;
  customerInfo :CustomerInfo;
  companyInfo: CompanyInfo; 
  items: Item[];
};


