import axios from "axios";
import {JSDOM} from "jsdom";
import {Readability} from "@mozilla/readability";

export async function loadNewsContent(result) {
    let r = await axios.get(result.url);

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r.data, {
        url: result.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();
    // Done! The article content is in the textContent property
    console.log(article.textContent);
    return article.textContent;
}