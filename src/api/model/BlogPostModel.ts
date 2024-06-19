export class BlogPostModel {
    id: number;

    private createdAt: string;
    private createdBy: string;
    
    heading: string;
    private content: string;


    constructor(id: number, createdAt: string, createdBy: string, heading: string, content: string) {
        this.id = id;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.heading = heading;
        this.content = content;
    }

    public getCopyright = (): string => {
        return `from ${this.createdBy} at ${this.createdAt.split("T")[0]}`;
    };

    public getContent = (): string => {
        return this.content;
    };

    public getContentPreview = () => {
        return `${this.content.substring(0, 2)}...`;
    };
}