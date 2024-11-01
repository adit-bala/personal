interface NewsItem {
    text: string;
    links?: Record<string, string>;
  }
  
  interface NewsFeed {
    currently: NewsItem[];
    previously: NewsItem[];
  }
  
export const newsFeed: NewsFeed = {
currently: [
    {text: "cloud infrastructure swe @ Sigma Computing", links: {"Sigma Computing": "https://www.sigmacomputing.com/"}},
    {text: "distributed systems researcher @ SkyLab", links: {"SkyLab": "https://sky.cs.berkeley.edu/project/rollbaccine/"}},
    {text: "backend developer @ BerkeleyTime", links: {"BerkeleyTime": "https://berkeleytime.com"}},
    {text: "course staff for cs162", links: {"cs162": "https://cs162.eecs.berkeley.edu"}},
],
previously: [      
    {text: "teaching assistant for cs61a (su22, fa22, sp23), cs61c (su23)", links: {"cs61a": "https://cs61a.org", "cs61c": "https://cs61c.org"}},
],
};