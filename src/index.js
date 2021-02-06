import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

export const CustomToggler = ({
  data,
  containerClass,
  itemClass,
  disabled,
  disabledClass,
  defaultSelected,
  onChange,
  onFocus,
  onBlur,
  ariaLabel
}) => {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (defaultSelected) {
      setSelected(defaultSelected)
      if (onChange) onChange(defaultSelected)
    }
  }, [])

  const displayItems = () => {
    return data.map((item, idx) => (
      <span
        key={idx}
        className={`${itemClass} ${(selected === item.value) ? styles.active : ''}`}
        onClick={() => {
          if (!disabled) {
            setSelected(item.value)
            if (onChange) onChange(item.value)
          }
        }}
        onKeyDown={(e) => {
          if (!disabled) {
            if (e.key === 'Enter' || e.key === ' ') setSelected(item.value)
            if (onChange) onChange(item.value)
          }
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={idx + 1}
        aria-label={item.ariaLabel}
      >
        {item.label}
      </span>
    ))
  }

  return <div
    data-testid="ct-container"
    className={`${containerClass} ${disabled ? disabledClass : ''}`}
    tabIndex={0}
    aria-label={ariaLabel}
    >
    {displayItems()}
  </div>
}

CustomToggler.defaultProps = {
  containerClass: styles.ctContainer,
  itemClass: styles.ctItem,
  disabledClass: styles.disabled,
  defaultSelected: null
}

CustomToggler.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string
  })).isRequired,
  containerClass: PropTypes.string,
  itemClass: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClass: PropTypes.string,
  defaultSelected: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ariaLabel: PropTypes.string
}
