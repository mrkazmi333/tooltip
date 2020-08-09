## Hosted Link here: https://mrkazmi333.github.io/tooltip/

## Index

- [About](#about)
- [Preview](#preview)
- [Usage](#usage)
  - [Pre-Requisites](#pre-requisites)
  - [Development Environment](#development-environment)
  - [File Structure](#file-structure)
  - [Commands](#command)

## About

A basic tooltip functionality implementation using ReactJS, CSS, HTML which one can easily incorporate in their projects.

## Preview

<img src="/assets/tooltip1.png"></img>
<img src="/assets/tooltip2.png"></img>

## Usage

To use this code, make sure you have all the `pre-requisites` and your `development environment` is ready. After that you can read about the `file-structure`, which also explains about project struction and how things are working in background. Commands will tell you about the important `commands` you should konow.

### Pre-requisites

In order to work on this project or to develop it, you need to have some pre-installed tools and knowledge about them. Below are the tools you need to install on your system:

- NPM
- Nodejs

### Development Environment

Once you have all the requirements checked out, you can develop this project. You need to set up the development environment to work on it. Follow the steps given below to setup:

1. Clone this repository, write in terminal `git clone https://github.com/mrkazmi333/tooltip.git`.
2. Go inside the cloned folder using `$ cd tooltip`, and install all the dependencies. `$ npm install`
3. To test run the dev server. `$ npm start`

### File Structure

| No  | File/Folder name   | Details                                                                   |
| --- | ------------------ | ------------------------------------------------------------------------- |
| 1   | ./src              | Contains un-built application source code.                                |
| 2   | ./src/components   | Individual components view, styling, and logic that our application uses. |
| 3   | ./src/index.css    | Style for the project.                                                    |
| 4   | ./node_modules/... | Auto installed node packages.                                             |
| 5   | package.json       | NPM package file for this project.                                        |
| 6   | package-lock.json  | NPM packages details.                                                     |
| 7   | .gitignore         | To ignore files to be a part of version control.                          |
| 8   | ./assets           | For storing the images of application preview.                            |
| 9   | ./build            | Webpack output the build here, which is then hosted by github pages.      |

### Commands

- Installing all the dependencies.
  ```
  npm install
  ```
- Starting development server.
  ```
  npm start
  ```

#### Build

To build the project for production, you can use the following command. The output will be dumped in `/build` folder which is used by the github pages to host the site.

```
$ npm run build
```

Feel free to add your own features or improve this one, any kind of help is appreciated.
