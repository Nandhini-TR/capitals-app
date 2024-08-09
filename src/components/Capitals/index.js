import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {id: countryAndCapitalsList[0].id}

  clickCountries = event => {
    this.setState({id: event.target.value.toUpperCase()})
  }

  render() {
    const {id} = this.state

    const filteredCountry = countryAndCapitalsList.find(item => item.id === id)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <select
            name="capital"
            id="capital"
            className="list-box"
            onChange={this.clickCountries}
            value={id}
          >
            {countryAndCapitalsList.map(countryList => (
              <option key={countryList.id} value={countryList.id}>
                {countryList.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="question">is capital of which country?</p>
          <p className="country">{filteredCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
