export interface Userdata {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface RequestData {
    page: number,
    per_page: number,
    total: number,
    total_pages : number,
    data: Userdata[],
    loading: boolean
}
