// import VirtualKeyboard from "@controls/VirtualKeyboard";
import { useOnClickOutside } from "../../../hook/useClickOutside";
import React, { useEffect, useRef, useState } from "react";
import useDebounce from '../../../hook/useDebounce'
//style
import { InputTextWrapper } from "./index.styled";
// import NumberVirtualKeyboard from "@controls/NumberVirtualKeyboard";

const TEXT = "TEXT"
const TEXT_ACTIVE = "TEXT_ACTIVE"
const TEXT_ERROR = "TEXT_ERROR"

const InputText = ({
  inputType,
  value,
  handleValidationInput,
  className = "",
  heightInput,
  error,
  title,
  isRequired,
  onChange,
  iconInput,
  isDisabled,
  isNumberKeyboard,
  maxLength,
  ...props
}) => {
  const refWrapInput = useRef()
  const refInput = useRef()

  const [typeInput, setTypeInput] = useState(inputType)
  const [errorInput, setErrorInput] = useState("");
  const [errorBorder, setErrorBorder] = useState(false);
  const [focusInput, setFocusInput] = useState(false);
  const [isValue, setIsValue] = useState(false)
  const [valueInput, setValueInput] = useState("");
  const [valueDebounce, clearDebounce] = useDebounce(valueInput, 500)
  const [showKeyboard, setShowKeyboard] = useState(false);


  useEffect(() => {
    if (focusInput) return
    setErrorInput(error);
    setTypeInput(TEXT)
    if (!error) {
      setErrorBorder(false)
      return
    }
    if (error) {
      setErrorBorder(true)
      setTypeInput(TEXT_ERROR)
      return
    }
  }, [focusInput, error]);

  useEffect(() => {
    setValueInput(value)
    if (!value) {
      setIsValue(false)
    }
    if (value) {
      setIsValue(true)
      setTypeInput(TEXT_ACTIVE)
      if (!focusInput) {
        handleValidationInput && handleValidationInput(value)
      }
    }
  }, [value])

  useEffect(() => {
    if (!focusInput) return
    onChange(valueDebounce)
  }, [valueDebounce])

  const _handleChange = (e) => {
    setValueInput(e.target.value)
  }

  const _handleBlurInput = () => {
    const valueText = refInput.current?.value;
    setFocusInput(false)
    if (valueText) {
      setIsValue(true)
      onChange(valueText)
      isRequired && handleValidationInput && handleValidationInput(valueText);
      return
    }
    if (!valueText && isRequired) {
      setErrorBorder(true)
      handleValidationInput && handleValidationInput(valueText);
      return
    }
  };

  const _handleFocusInput = () => {
    refInput.current.focus()
    setFocusInput(true);
    setErrorBorder(false)
    setIsValue(false)
    setErrorInput("")
    setTypeInput(TEXT_ACTIVE)
  };

  //handle typeInput show icon
  const handleTypeInput = (type) => {
    if (!iconInput) return
    switch (type) {
      case TEXT:
        return <iconInput.icon className="icon-left" />
      case TEXT_ACTIVE:
        return <iconInput.icon className="icon-left" />
      // case TEXT_ERROR:
      //   return <iconInput.iconError className="icon-left" />
      default: return;
    }
  }
  const iconTypeInput = handleTypeInput(typeInput)

  useEffect(() => {
    setShowKeyboard(focusInput)
  }, [focusInput]);

  useOnClickOutside(refWrapInput, () => {
    if (!focusInput) return;
    _handleBlurInput()
  })
  return (
    <InputTextWrapper heightInput={heightInput} className={className} isDisabled={isDisabled} isFocus={focusInput} title={valueInput}>
      <div
        className={`wrap-input${focusInput ? " focus" : ""}${isValue && !focusInput ? " active" : ""}${errorBorder && !value ? " error-input" : ""}${errorBorder && value ? " error-input-value" : ""} `}
        onClick={_handleFocusInput}
        ref={refWrapInput}
      >
        {iconInput && iconTypeInput}
        <input
          {...props}
          // disabled
          value={valueInput}
          ref={refInput}
          placeholder=" "
          onChange={_handleChange}
          // onBlur={_handleBlurInput}
          onFocus={_handleFocusInput}
          maxLength={maxLength}
        />
        <span className="placeholder" style={{ maxWidth: `${window.innerWidth - 15}px` }} title={title}>
          {title}{isRequired && <span className="note">*</span>}
        </span>
        {/* {showKeyboard && !isNumberKeyboard &&
          <VirtualKeyboard
            inputRef={refInput}
            text={valueInput}
            setText={setValueInput}
            onEnter={_handleBlurInput}
            maxLength={maxLength}
          />
        }
        {showKeyboard && isNumberKeyboard &&
          <NumberVirtualKeyboard
            inputRef={refInput}
            text={valueInput}
            setText={setValueInput}
            isLoan={isNumberKeyboard}
          />
        } */}
      </div>
      {errorInput && <div className="error">{errorInput}</div>}
    </InputTextWrapper>
  );
};

export default InputText;
