import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    }

    public search_word(term) {
        return this.http.get(this.url + term);
    }

}
