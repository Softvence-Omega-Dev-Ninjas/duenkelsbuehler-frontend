export type SubStep =
  | "search"
  | "contract"
  | "confirm"
  | "proposal-details"
  | "final-remarks"
  | "ready"
  | "track";

export interface SP {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
}

export interface ProposalData {
  sp: SP | null;
  contractFile: File | null;
  docuSign: boolean;
  title: string;
  issueDate: string;
  dueDate: string;
  price: string;
  notes: string;
  terms: string;
  confirmSP: boolean;
  confirmUnverified: boolean;
}
