import React from "react"
import * as Select from "@radix-ui/react-select"
import * as Label from "@radix-ui/react-label"
import { ChevronDown as ChevronIcon, Info as InfoIcon } from "react-feather"

import styles from "./SelectInput.module.css"

function SelectInput({
  label,
  value,
  infoLink,
  placeholder,
  onValueChange,
  acceptedValues,
}) {
  const inputId = React.useId()

  return (
    <div className={styles.wrapper}>
      <div className={styles.upper}>
        <Label.Root className={styles.label} htmlFor={inputId}>
          {label}
        </Label.Root>
        {infoLink && (
          <a
            href={infoLink}
            aria-label={`Read the official documentation on the "${label}" property`}
            target='_blank'
            rel='noreferrer'
            className={styles.icon}
          >
            <InfoIcon size={16} strokeWidth={1.5} />
          </a>
        )}
      </div>
      <Select.Root value={value} onValueChange={onValueChange} id={inputId}>
        <Select.Trigger className={styles.trigger}>
          <Select.Value placeholder={placeholder} aria-label={value}>
            {value}
          </Select.Value>
          <Select.Icon asChild>
            <ChevronIcon size={16} strokeWidth={1.5} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content>
          <Select.Viewport>
            {acceptedValues.map((acceptedValue) => (
              <Select.Item key={acceptedValue} value={acceptedValue}>
                {acceptedValue}
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  )
}

export default SelectInput