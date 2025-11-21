// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Leadtech 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the progression frameworks we use at Leadtech.
            </DescriptionText>
            <DescriptionText>
              Progression frameworks are tools that help us evaluate and develop our
              team consistently, and help people understand how to progress in
              their careers at Leadtech.
            </DescriptionText>
            <DescriptionText>
              These frameworks define the skills, behaviors, and impact expected
              at each level, providing clear guidance for career development and growth.
            </DescriptionText>
            <DescriptionText>
              We&apos;ll be continuously updating and refining these frameworks
              as we grow and evolve, so expect things to improve over time!
            </DescriptionText>
            <DescriptionText>
              This framework is based on{' '}
              <a href="https://github.com/monzo/progression-framework">
                Monzo&apos;s open-source progression framework
              </a>
              , which we&apos;ve adapted and customized for Leadtech&apos;s
              culture, values, and role structures.
            </DescriptionText>
            <DescriptionText>
              To contribute or suggest changes, visit our{' '}
              <a href="https://github.com/ItsyMarques/LT_Progression-Framework">
                <FontAwesomeIcon icon={faGithub} />{' '}
                GitHub repository.
              </a>
            </DescriptionText>
            <DescriptionText>
              Take a look around and let us know what you think! 🚀
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
