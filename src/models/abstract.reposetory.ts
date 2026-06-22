import { Model, ProjectionType, QueryFilter, QueryOptions } from "mongoose";




export abstract class AbstractRepository<T> {
    protected constructor(private _model: Model<T>) { }



    public async create(item: Partial<T>): {
        const doc = new this._model(item);

      return doc.save();
        }


         public async  getone(filter: QueryFilter<T>, projection: projectionType<T>, options: QueryOptions){


    return this._model.findOne(filter, projection, options);
}
       public async   getall(filter: QueryFilter<T>, projection: ProjectionType<T>, options: QueryOptions){

    return this._model.find(filter, projection, options);
}
        public async updateone(filter: QueryFilter<T>, updateData: Partial<T>, options: QueryOptions ={returnDocument: 'after'}) {
    return this._model.updateOne(filter, updateData, options);
}
        public async delete (filter: QueryFilter<T>) {
    return this._model.deleteOne(filter);
}

}