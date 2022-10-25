

// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


const mainEl = document.querySelector("main")



// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

mainEl.style.backgroundColor = "#4a4e4d"

// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

// Add a class of flex-ctr to mainEl.

mainEl.classList.add("flex-ctr")

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById("top-menu")

// Set the height topMenuEl element to be 100%

topMenuEl.style.height = '100%'

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = "#0e9aa7"

// Add a class of flex-around to topMenuEl.

topMenuEl.classList.add("flex-around")



menuLinks.forEach(function (obj) {
  let a = document.createElement('a')
  a.setAttribute("href", obj.href)
  a.textContent = obj.text
  topMenuEl.append(a)

})

// console.log(menuLinks)




// =================================== Part Two ===================================


// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

let subMenuEl = document.getElementById("sub-menu")


// Set the height subMenuElelement to be 100%.

subMenuEl.style.height = '100%'


// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'


// Add the class of flex-aroundto the subMenuElelement.

subMenuEl.classList.add('flex-around')


// Set the CSS positionproperty of subMenuElto the value of absolute.

subMenuEl.style.position = 'absolute'


// Set the CSS topproperty of subMenuElto the value of 0.

subMenuEl.style.top = '0'


// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.

const topMenuLinks = document.querySelectorAll('a')
// console.log(topMenuLinks)

// Declare a global showingSubMenuvariable and initialize it to false;

let showingSubMenu = false

// Attach a delegated 'click' event listener to topMenuEl.


topMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault()

  let link = evt.target

  // console.log(link.tagName)

  if (link.tagName !== 'A') {
    console.log('Still in event listener')
    return
  }


  if (link.classList === 'active') {
    link.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return

  }
  topMenuLinks.forEach((arg) => {
    arg.classList.remove('active');
    // console.log(arg)
  })



  let currentLink = {}
  for (let i = 0; i < menuLinks.length; i++) {
    if (link.textContent === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
      currentLink = menuLinks[i]
      console.log(menuLinks[i])

    }
  }


  // console.log('menuLinks')

  // console.log(menuLinks[i])
  // console.log(menuLinks[i].subLinks)
  // console.log(menuLinks[i].hasOwnProperty('subLinks'))



  if (showingSubMenu === true) {
    subMenuEl.style.top = "100%"
    buildSubMenu(currentLink)
  }
  else {
    subMenuEl.style.top = "0%"
  }






  function buildSubMenu() {
    subMenuEl.innerHTML = ""
    currentLink.subLinks.forEach(function (link) {
      let b = document.createElement('a')
      b.setAttribute('href', link.href)
      b.textContent = link.text
      subMenuEl.append(b)
      console.log(b)

    })

  }

  if (link.text === 'about'){
    mainEl.innerHTML = `<h1>${evt.target.text}</h1`;
  }


})

subMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault()


  if (evt.target.tagName !== 'A') {
    console.log('Still in event listener')

    return

  }
  showingSubMenu = false
  subMenuEl.style.top = '0'

  topMenuLinks.forEach((arg) => {
    arg.classList.remove('active');


    // console.log(arg)
  })
  mainEl.innerHTML = `<h1>${evt.target.text}</h1`;
})



























// Next in the event listener, if the clicked <a>link has a class of active:

// Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
