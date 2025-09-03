export class BookingRequest {
  restaurant: string = '';
  date: string = '';
  people: number = 1;
  userId!: number;
  restId!: number;
}
