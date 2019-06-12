import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Card = () => (
  <StaticQuery
    query={graphql`
      query {
        allEventbriteEvents {
          edges {
            node {
              id
              name {
                text
              }
              url
              venue {
                address {
                  city
                }
                name
              }
              logo {
                original {
                  url
                }
              }
              description {
                text
              }
              start {
                local
              }
            }
          }
        }
      }
    `}
    render={data => {
      return data.allEventbriteEvents.edges.map(event => (
        <div>
          <p>id : {event.node.id}</p>
          <p>Titre : {event.node.name.text}</p>
          <img
            src={event.node.logo.original.url}
            alt={"presentation du meetup"}
          />
          <p>Quand : {event.node.start.local.replace(/T/, " à ")}</p>
          <p>Lieux : {event.node.venue.name}</p>
          <p>Adresse : {event.node.venue.address.city}</p>
          <p>Description : {event.node.description.text}</p>
          <a href={event.node.url} target="_blank" rel="noopener noreferrer">
            <button>S'inscrire</button>
          </a>
          <p></p>
          <hr />
        </div>
      ))
    }}
  />
)
export default Card
