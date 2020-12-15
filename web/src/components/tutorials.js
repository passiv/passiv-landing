import { format, distanceInWords, differenceInDays } from "date-fns";
import React, { useState } from "react";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import AuthorList from "./author-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import styles from "./blog-post.module.css";

function Tutorials(props) {
  const { _rawBody, _rawExcerpt, authors, categories, title, mainImage, publishedAt } = props;
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    axios
      .post("https://passiv.com/api/v1/emailsubscribe", { email: email })
      .then((response) => {
        setSuccess(true);
        console.log("success", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
              <div className={styles.share}>
                <h2>Share</h2>
                <a
                  target="_blank"
                  href={`https://twitter.com/intent/tweet/?text=${title}&url=https://passiv.com/help/tutorials/${props.slug.current}%2F&via=getpassiv`}
                >
                  <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://passiv.com/help/tutorials/${props.slug.current}`}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://passiv.com/help/tutorials/${props.slug.current}&title=${title}&source=${title}`}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
                </a>
              </div>
              <div className={styles.formContainer}>
                <h2>Stay up to date</h2>

                <form onSubmit={handleSubmit}>
                  <label for="email">
                    Email
                    <input id="email" name="email" required="" type="email" />
                  </label>
                  {success ? (
                    <button type="submit" disabled>
                      Success
                    </button>
                  ) : (
                    <button type="submit">Get Updates</button>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className={styles.tutorialPost}>
            <div className={styles.mainContent}>
              <h1>{title}</h1>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

export default Tutorials;
