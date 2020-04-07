window.onload = function () {

  var body = document.getElementsByTagName('body')[0];
  // xu ly mune header 
  var menuBar = document.getElementById('menu-bar');
  var ctmenu = document.getElementsByClassName('menuTool')[0];
  menuBar.onclick = function () {
    ctmenu.style.display = "block";
    
  }
  var btnX = document.getElementsByClassName('btnX')[0];
  btnX.onclick = function () {
    ctmenu.style.display = "none";
  }

  const list = document.querySelectorAll('.header-drop');
  list.forEach(item => {
    // console.log(item.getElementsByClassName('menuxt')[0]);
    item.getElementsByClassName('menuxt')[0].addEventListener('click', e => {
      const submenu1 = item.getElementsByClassName('mmenu')[0];
      // const menuxt = item.getElementsByClassName('menuxt')[0];
      if (submenu1.classList.contains('active')) {
        
        submenu1.classList.remove('active');
        item.classList.remove('active')
      } else {
        submenu1.classList.add('active');
        item.classList.add('active');
      }
    })
  })

  const lis = document.querySelectorAll('.hover-li');
  lis.forEach(item => {
    console.log(item);
    item.getElementsByClassName('menuxt2')[0].addEventListener('click', e => {
      console.log(item.getElementsByClassName('menuxt2')[0]);
      const submenu = item.getElementsByClassName('menuxt2-show')[0];
      console.log(submenu);
      const menuxt2div = item.getElementsByTagName('div')[0];
      if (submenu.classList.contains('active')) {
        submenu.classList.remove('active');
        menuxt2div.classList.remove('active');
      } else {
        submenu.classList.add('active');
        menuxt2div.classList.add('active');
      }
    })
  })
}