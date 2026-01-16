import News from './news/news';
import Sources from './sources/sources';


interface IArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

interface INewsResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

interface ISourcesResponse {
    status: string;
    sources: ISource[];
}

export class AppView {
    private news: News;
    private sources: Sources;
    
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INewsResponse | undefined): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourcesResponse | undefined): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
