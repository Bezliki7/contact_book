export type ContactType = {
  id: number;
  name: string;
  number: string;
};

export type ContactWithAddInf = {
  name: string;
  number: string;
  FirstComb?: string;
};

export type popupAction = 'none' | 'addForm' | 'delete' | 'updateForm';