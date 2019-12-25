// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"
import fon from '../images/fon.png'
import img01 from '../images/img01.jpg'
import icons01 from '../icons/icons01.svg'
import icons02 from '../icons/icons02.svg'
import icons03 from '../icons/icons03.svg'
import icons04 from '../icons/icons04.svg'
import icons05 from '../icons/icons05.svg'
import Contact from '../components/contact';
import GoogleMaps from '../components/googlemaps';
import Slider from '../components/slider';

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 70px;
    @media (max-width: 710px) {
        
      padding: 0px;
    }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'home'
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="home" />
    
      <section className='page-image'>
            <img className="firs-img"  src={fon} alt="fon" />
            <div className='startup-opasiti'>
              
              <div className='startup-cont'>
                <div className='container'>
                <h1 className='startup-title'>
                Батьківська оселя
                  <br></br>
                  <span className='agenzi'>
                  Піца давно і впевнено завоювала кулінарний світ. Кафе, ресторани, бістро в усьому світі пропонують відкритий корж з томатами, розплавленим сиром, збагачуючи рецепт новими продуктами. 
                  </span>
                </h1>
                <button className='startup-btn'>
                  <span className='btn-txt'>Get started</span>
                </button>
              </div>
              </div>
            </div>
    </section>
    <section className='container-about'>
      <div className='container'>
        <div className='about-title'>
        <div className='about-line bout-line-1'></div>
        <div className='about-line about-line-color'>
        <p className='about-txt_title'>Чому ми?</p>
        </div>
        <div className='about-line bout-line-1'></div>
        </div>
        <div className='container-about_icons'>
        <div className='container_list'>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons01} alt="" /></div>
          <p className='container-about_block_txt'>Акція на будь-який смак</p>
          </div>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons02} alt="" /></div>
          <p className='container-about_block_txt'>Швидка доставка</p>
          </div>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons03} alt="" /></div>
          <p className='container-about_block_txt'>Контроль за виконанням
стандарту якості</p>
          </div>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons04} alt="" /></div>
          <p className='container-about_block_txt'>Цілодобова робота</p>
          </div>
          <div className='container-about_block'>
          <div className='about-img'><img src={icons05} alt="" /></div>
          <p className='container-about_block_txt'>Любимо те, що робимо, а найголовніше
неймовірно швидко</p>
          </div>
        </div>
        </div>
        <Slider />
        <div className='idea-container'>
          <div className='idea-container_cont-img'>
          <div class="idea-container_cont-img">
          <img className="idea-container_cont-img_img lazy-img" src={img01} alt="img01" />
        </div>
          </div>
          <div className='idea-container_cont-txt'>
          <h3 className="idea_title">Піцерія у Львові, швидка доставка додому і в офіс</h3>
          <p className="idea_txt">Піца давно і впевнено завоювала кулінарний світ. Кафе, ресторани, бістро в усьому світі пропонують відкритий корж з томатами, розплавленим сиром, збагачуючи рецепт новими продуктами. Незвичайні смакові поєднання здатні задовольнити найвишуканіший запит. Для зручності гостей багато компаній організували службу доставки, щоб кулінарні новинки стали доступні кожному.</p>
          </div>
        </div>
        <div className='idea-container idea-container-rewers'>
          <div className='idea-container_cont-txt'>
          <h3 className="idea_title">Піцерія у Львові, швидка доставка додому і в офіс</h3>
          <p className="idea_txt">Піца давно і впевнено завоювала кулінарний світ. Кафе, ресторани, бістро в усьому світі пропонують відкритий корж з томатами, розплавленим сиром, збагачуючи рецепт новими продуктами. Незвичайні смакові поєднання здатні задовольнити найвишуканіший запит. Для зручності гостей багато компаній організували службу доставки, щоб кулінарні новинки стали доступні кожному.</p>
          </div>
          <div className='idea-container_cont-img'>
          <div class="idea-container_cont-img">
          <img className="idea-container_cont-img_img lazy-img" src={img01} alt="img01" />
        </div>
          </div>
        </div>
        <div className='idea-container'>
          <div className='idea-container_cont-img'>
          <div class="idea-container_cont-img">
          <img className="idea-container_cont-img_img lazy-img" src={img01} alt="img01" />
        </div>
          </div>
          <div className='idea-container_cont-txt'>
          <h3 className="idea_title">Піцерія у Львові, швидка доставка додому і в офіс</h3>
          <p className="idea_txt">Піца давно і впевнено завоювала кулінарний світ. Кафе, ресторани, бістро в усьому світі пропонують відкритий корж з томатами, розплавленим сиром, збагачуючи рецепт новими продуктами. Незвичайні смакові поєднання здатні задовольнити найвишуканіший запит. Для зручності гостей багато компаній організували службу доставки, щоб кулінарні новинки стали доступні кожному.</p>
          </div>
        </div>
      </div>
    </section>
            <Contact />
            <GoogleMaps />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            price
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
