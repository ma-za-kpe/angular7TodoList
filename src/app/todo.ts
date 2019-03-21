export class Todo {
  public showDescription: boolean;
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public completeDate: Date
  ) {
    this.showDescription = false;
  }
}
