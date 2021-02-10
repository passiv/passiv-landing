import {format, distanceInWords, differenceInDays} from 'date-fns'
import React, {useState} from 'react'
import Container from './container'
import axios from 'axios'
import {Chart} from 'react-charts'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import ReadingProgress from 'react-reading-progress'
import styles from './blog-post.module.css'
import {Link} from 'gatsby'
const ReactMarkdown = require('react-markdown')

function DataFeed (props) {
  const {body, title, slug, publishedAt, postType} = props
  const [success, setSuccess] = useState(false)
  const [historicalPrices, setHistoricalPrices] = useState(null)
  const ticker = props.slug.current.toUpperCase()
  const [dataRetrieved, setDataRetrieved] = useState(false)
  const [ownedPercent, setOwnedPercent] = useState(0)

  if (historicalPrices === null && ticker != 'ETF-DIRECTORY') {
    axios
      .get('https://passiv.com/api/v1/historical/' + ticker)
      .then((response) => {
        // console.log(response.data);
        setHistoricalPrices(response.data)
        setDataRetrieved(true)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  axios.get(`https://passiv.com/api/v1/ownedPercent/${props.slug.current.toUpperCase()}`)
    .then(response => setOwnedPercent(response.data))
    // setOwnedPercent(response)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const email = form.get('email')
    axios
      .post('https://passiv.com/api/v1/emailsubscribe', {email: email})
      .then((response) => {
        setSuccess(true)
        console.log('success', response)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  const data = React.useMemo(
    () => [
      {
        label: 'Share Price',
        data: historicalPrices?.map((a) => {
          let date = new Date(Date.parse(a.date))
          return [new Date(date.getFullYear(), date.getMonth(), date.getDate()), a.close]
        }),
        color: '#04A286'
      }
    ],
    [historicalPrices]
  )

  const axes = React.useMemo(
    () => [
      {primary: true, type: 'time', position: 'bottom'},
      {type: 'linear', position: 'left'}
    ],
    []
  )

  return (
    <div className={styles.feed}>
      <ReadingProgress targetEl='#targetEl' />

      <article id='targetEl' className={styles.root}>
        <Container>
          <div className={styles.metaContainer}>
            <div className={styles.metaDetails}>
              {postType && (
                <Link className={styles.category} to={postType == 'stock' ? '/stock/directory' : '/etf/etf-directory/'}>
                  {postType}
                </Link>
              )}
              <div>
                <h1 className={styles.blogTitle}>{title}</h1>
                {ownedPercent && <p>This security is owned by {Math.round(ownedPercent * 1000) / 10}% of Passiv Users</p>}
              </div>

            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.sidebar}>
              {dataRetrieved && data !== undefined && (
                <div
                  style={{
                    width: '260px',
                    height: '150px',
                    margin: '5px'
                  }}
                >
                  <Chart data={data} axes={axes} tooltip />
                </div>
              )}
              <div className={styles.sidebarContainer}>
                <div className={styles.dataFeedShare}>
                  <h2>Share</h2>
                  <a
                    className={styles.shareLinks}
                    target='_blank'
                    href={`https://twitter.com/intent/tweet/?text=${title}&url=https://passiv.com/blog/${props.slug.current}%2F&via=getpassiv`}
                  >
                    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                  </a>
                  <a
                    className={styles.shareLinks}
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://passiv.com/blog/${props.slug.current}`}
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                  </a>
                  <a
                    className={styles.shareLinks}
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://passiv.com/blog/${props.slug.current}&title=${title}&source=${title}`}
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
                  </a>
                </div>
                <div className={styles.formContainer}>
                  <h2>Stay up to date</h2>

                  <form onSubmit={handleSubmit}>
                    <label htmlFor='email'>
                      Email
                      <input id='email' name='email' required='' type='email' />
                    </label>
                    {success ? (
                      <button type='submit' disabled>
                        Success
                      </button>
                    ) : (
                      <button type='submit'>Get Updates</button>
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className={styles.mainContent}>
              <ReactMarkdown source={body} escapeHtml={false} />
            </div>
          </div>
        </Container>
      </article>
    </div>
  )
}

export default DataFeed
