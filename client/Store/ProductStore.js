import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._category = []
        this._product = []
        this._selectedCategory = {}
        makeAutoObservable(this)
    }

    setCategory(category) {
        this._category = category
    }

    setProduct(product) {
        this._product = product
    }
    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    get category() {
        return this._category
    }
    get product() {
        return this._product
    }
    get selectedCategory() {
        return this._selectedCategory
    }
}