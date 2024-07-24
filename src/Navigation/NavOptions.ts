
export class NavOptions {
    Selector: any;

    LoadFromElement (element: any) {
        this.Selector = element;
        this.Title = $(element).find('span.title').text();
        this.Url = $(element).attr('action');
    }
    constructor() {
        this.Tabs = false;
        this.Overlay = true;
        this.ClearContent = true;
        this.Placeholder = NavOptionsPlaceholders.SideBar;
        this.Method = NavOptionsMethods.Get;
        this.ZIndex= 100;
    }
    public ct: any;
    public Placeholder:  NavOptionsPlaceholders;
    public Method : NavOptionsMethods;
    public Title?: string;
    public Url?: string;
    public Tabs: boolean;
    public Overlay: boolean;
    public ZIndex: Number;
    public ClearContent: boolean;

    // ...
}

enum NavOptionsPlaceholders {
    SideBar,
    Content,
    PostContent,
    ContentSideBar,
    Popup,
    TopHeader
}
enum NavOptionsMethods {
    Get,
    Post
}

export class UrlOptions {

}
