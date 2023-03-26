import React from "react";
import "./cards.css";

function Cards() {
  return (
    <>
      <div class="tabs-content_new-blog pt-0 w-tab-content">
        <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
          <div class="blog-collection_wrp">
            <div class="container-extra-large w-dyn-list">
              <div
                fs-cmscombine-element="list-2"
                fs-cmsfilter-element="list"
                role="list"
                class="_2-grid-new_blog-as-cards w-dyn-items"
              >
                <div role="listitem" class="w-dyn-item">
                  <a
                    data-w-id="ae1b5131-ca9e-2f53-c833-03f92425efa7"
                    href="blog/chat-by-copy-ai.html"
                    class="blog-card_item w-inline-block"
                  >
                    <div class="blog-card-data-wrp">
                      <div
                        id="w-node-_7fe77d26-e758-bf82-a722-689a77491ce5-3efab601"
                        style={{ backgroundColor: "#F9A06F" }}
                        class="category-tag"
                      >
                        Announcements
                      </div>
                      <div class="dot-separator"></div>
                      <div class="subtitle_blog">3 min read</div>
                    </div>
                    <div class="blog-title-bow">
                      <h2 fs-cmsfilter-field="title" class="new-blog_title">
                        Introducing Chat by Copy.ai: The Future of Sales and
                        Marketing
                      </h2>
                    </div>
                    <div fs-cmsfilter-field="content" class="max-text">
                      At Copy.ai, we&#x27;re constantly pushing the boundaries
                      of what&#x27;s possible with AI to help teams achieve
                      more. We&#x27;ve always believed in giving people
                      superpowers, not automating them away. ChatGPT was a
                      revolutionary step forward in generative AI, but ChatGPT
                      has drawbacks for sales and marketing teams looking to
                      leverage this technology for growth. That&#x27;s why
                      we&#x27;re excited to announce our latest innovation: Chat
                      by Copy.ai.
                    </div>
                    <div class="new-blog_author-wrp">
                      <div
                        id="w-node-dbf2c613-e130-2a0f-9cc0-3ac52528cf64-3efab601"
                        style={{
                          backgroundImage:
                            "url(_https_/assets-global.website-files.com/628288c5cd3e8451380a36c7/6299342c1326a72337f3d274_61bbdcd4abdcb980088a21b3_paul-yacoubian.html)",
                        }}
                        class="new-blog-card_author-photo"
                      ></div>
                      <div class="new-blog_autor-date">
                        <div
                          id="w-node-f8e908bf-22dd-8e4d-1379-2ba9c7dbcd70-3efab601"
                          class="blog-card_author-name"
                        >
                          Paul Yacoubian
                        </div>
                        <div
                          id="w-node-fd83b952-d4dd-79d2-0375-688840f21e6f-3efab601"
                          class="blog-card_created-date"
                        >
                          March 8, 2023
                        </div>
                      </div>
                    </div>
                    <div class="blog-card_circle-link">
                      <img
                        loading="lazy"
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/6390991d22fb563de7fefcf3_blog-arr.svg"
                        alt=""
                        class="blog-arrow"
                      />
                      <img
                        loading="lazy"
                        src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/6391a3d706678137dd0dc42f_blog-arr_hover.svg"
                        alt=""
                        class="blog-arrow_hover"
                      />
                    </div>
                    <div class="w-embed"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
