import React from 'react'
import { Dropdown } from 'flowbite-react'

const OrderByDropdown = ({ setCriterion }) => {
  return (
    <Dropdown
      label="Sort by"
      inline={true}
    >
      <Dropdown.Item onClick={() => setCriterion("release_date")}>
        Newest
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setCriterion("rating")}>
        Best rated
      </Dropdown.Item>
    </Dropdown>
  )
}

export default OrderByDropdown