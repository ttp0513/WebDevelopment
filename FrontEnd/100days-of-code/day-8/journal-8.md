# 📘 Day 8 Journal – JavaScript - Strings (continued)

## ✅ What I Did Today


## 🎨 What is <code>prompt()</code>?
*Definition*
<code>prompt()</code> opens a dialog box that asks the user for input, then it returns the text entered as a string

*Input*
1. First argument: the message that will appear inside the dialog box
2. Second argument (optional): default value, will fill the input initially

*Output*
1. User enters input: input will be displayed in the console
2. User cancels the prompt: variable is set to <code>null</code>

*Limitations*
1. prompt() will halt the execution of the script until the user interacts with the dialog box. Thus, it is generally avoided in modern web apps

## 🎨 JS ASCII

**ASCII Definition**: 
1. ASCII = American Standard Code for Information Interchange, a character encoding standard used in computers to represent text.
2. ASCII assigns a numeric value to each character, which is recognized by machines. Example: 65 = capital letter A
3. ASCII covers 128 characters including:
3.1 Uppercase and lowercase letters (A-Z,a-z)
3.2 Numbers (0-9)
3.3 Common punctuation marks and symbols (!,@,#,etc...)
3.4 Control characters (Newline, tab)

**JS ASCII Syntax**

1. Find ASCII values of a character <code>.charCodeAt()</code>

2. Convert ASCII code into its corresponding character <code>String.fromCharCode() </code>


## 🎨 What is <code>.includes(arg1, arg2)</code>?


*Input* 
1. **First argument**: checks if a string contains a specific substring and return boolean outcome
2. **Second argument**: check for a substring at a specific index

*Note*
<code>.includes</code> is case-sensitive

## 🎨 What is <code>.slice(arg1, arg2)</code>?

*Input* 
1. **Only 1 positive argument**: extracts characters from specified index to the end of the string
2. **Two argument**: extracts characters starting from index 0 up to, but not including the specified index in 2nd argument.
3. **Only 1 negative argument**: extracts the last [specified index] characters from the string

## 🎨 JS Casing

1. <code>.toUpperCase()</code> To UPPERCASE the string
2. <code>.toLowerCase()</code> To lowercase the string

Use Case: make sure input is standardized for case-insensitive comparisons

## 🎨 What is <code>.trim()</code>?

1. <code>trim()</code> Remove whitespace from both the beginning and the end of a string
2. <code>trimStart()</code> remove whitespace from the beginning
3. <code>trimEnd()</code>  remove whitespace from the end

*Why trim() matters?*
Whitespace can interfere with operations like comparison, storage, or display, which is why it's important to know how to remove it efficiently.

## 🎨 What is <code>.replace(arg1, arg2)</code>?
<code>replace(arg1, arg2)</code> replaces only the first occurrence of the search value (arg1) with a new value (arg2). If search value is not found, no replacement will be done.

1. First argument: value to search for in the string
2. Second argument: new value that will place search value

*Note*
<code>replace(arg1, arg2)</code> is case-sensitive

## 🎨 What is <code>.repeat(count)</code>?
<code>repeat()</code> duplicates text by <code>count</code> times

*Limitations*
1. <code>count</code> must not be a negative number, otherwise JS will throw <code>RangeError</code>
2. <code>count</code> must be a finite number, or cant be <code>Infinity</code>, otherwise <code>RangeError</code>
3. <code>count</code> is decimal, <code>repeat()</code> will round it <strong>down</strong>
4. <code>count</code> is 0, output will be empty string <code>""</code>