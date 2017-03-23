export interface StudentInterface {
  name: string;
  surname: string;
  age: number;
  needHostel: boolean;
  homeTown: string;
}

export const data: StudentInterface = {
  name: 'Vasyl',
  surname: 'Motsyak',
  age: 21,
  needHostel: true,
  homeTown: 'Beregovo'
};
