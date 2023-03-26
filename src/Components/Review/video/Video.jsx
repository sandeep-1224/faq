import React from "react";
import "./video.css";

function Video() {
  return (
    <>
      <div class="competitor-testimonial-wrapper">
        <div class="section-tag">Testimonial</div>
        <h2 class="h2-competitor center">Airtable Case Study</h2>
        <p class="competitor_testimonial-subhead">
          <span class="text-span-24">"</span>Copy.ai has enabled me to free up
          time to focus more on where we want to be in say three months from
          now, six months from now, instead of just deep in the weeds.
          <span class="quote-1">"</span>
        </p>
        <p class="competitor_testimonial-subhead-bold">
          - Jen Quraishi Phillips, Airtable
        </p>
        <a
          href="#"
          class="competitor_testimonial-video-lightbox w-inline-block w-lightbox"
          aria-label="open lightbox"
          aria-haspopup="dialog"
        >
          <div class="competitor_lightbox-button">
            <img
              src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63cf266e47c7b5f72c74abd5_play%20icon.svg"
              loading="lazy"
              alt=""
              class="competitor_lightbox-icon"
            />
            <div class="circle-bg-blur"></div>
          </div>
          <img
            src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63cf23c53670fea02a853a83_testimonial%20img.jpg"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 78vw, (max-width: 991px) 76vw, 632px"
            srcset="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63cf23c53670fea02a853a83_testimonial%20img-p-500.jpg 500w, https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63cf23c53670fea02a853a83_testimonial%20img-p-800.jpg 800w, https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63cf23c53670fea02a853a83_testimonial%20img-p-1080.jpg 1080w, https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/63cf23c53670fea02a853a83_testimonial%20img.jpg 1280w"
            alt=""
            class="competitor_testimonial-img"
          />
        </a>
        <div class="competitor_testimonial-stats">
          <div class="competitor_testimonial-stat-card">
            <div class="competitor_testimonial-card-content">
              <div class="competitor_testimonial-card-header">
                &lt; 5 Minutes
              </div>
              <div class="competitor_testimonial-card-sub">
                time to get set up
              </div>
            </div>
          </div>
          <div class="competitor_testimonial-stat-card">
            <div class="competitor_testimonial-card-content">
              <div class="competitor_testimonial-card-header">10x</div>
              <div class="competitor_testimonial-card-sub">
                Each employee's productivity
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
