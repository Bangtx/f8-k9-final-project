import { Repository } from 'typeorm';
import {Base as BaseEntity} from './entity'
import {Vendor} from "../vendor/entity";

export class BaseService {

    constructor(protected repository: Repository<BaseEntity>) {}

    handleFind(query, condition = {active: true}) {
        query.where(condition)
        return query
    }

    handleSelect() {
        return this.repository.createQueryBuilder()
    }

    handleOrder(query) {
        return query.orderBy(['id asc'])
    }

    getList(condition: any = {active: true}) {
        let query = this.handleSelect()
        query = this.handleFind(query, condition)
        return query.getRawMany()
    }

    create(data) {
        return this.repository
            .createQueryBuilder()
            .insert()
            .values(data).execute()
    }

    updateOne(id, data) {
        return this.repository
           .createQueryBuilder()
           .update()
           .set(data)
           .where("id = :id", { id })
           .execute()
    }

    softDelete(id) {
        return this.updateOne(id, {active: false})
    }
}












