export interface UpcomingEvent {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  description: string;
}

export type AccountInfo = {
  name: string;
  accountNumber: string;
};

export type Pastor = {
  id: number;
  name: string;
  role: string;
  pic: string;
};
