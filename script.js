(function () {
  // blocks to be populated with what to wear items
  const blocks = {
    colors: ['black', 'dark', 'nat'],
    crankbait: ['crankbait'],
    lipless_crankbait: ['lipless_crankbait'],
    squarebill: ['squarebill'],
    jerkbait: ['jerkbait'],
    texas_rig: ['texas_rig'],
    jig: ['jig'],
    swimbait: ['swimbait'],
    drop_shot: ['drop_shot'],
    spinnerbait: ['spinnerbait'],
    chatterbait: ['chatterbait'],
    buzzbait: ['buzzbait'],
    wacky_rig: ['wacky_rig'],
    ned_rig: ['ned_rig'],
    frog: ['frog'],
    popper: ['popper'],
    whopper_plopper: ['whopper_plopper']

    // head     : ['winter_cap','hat'],
    // face     : ['sunglasses'],
    // torso    : ['heavy_jacket','light_jacket','vest','ls','ss','singlet','bra'],
    // legs     : ['tights','capris','shorts'],
    // feet     : ['shoes'],
    // sunblock : ['sunblock']
  };
  // what to wear items and requirements
  const items = {
    black: {
      title: 'Colors : Blacks',
      desc: '<b>Soft plastics:</b> Black and Black n Blue<br><b>Hard Plastics:</b> Silver, Gold, or Black',
      requirements: data => {return data.feel == 'w';}
      //image        : image.src = `https://bestbassfishinglures.com/wp-content/uploads/2018/01/bass-jigs.jpg`
    },
    dark: {
      title: 'Colors : Darks & Naturals',
      desc: '<b>Soft plastics:</b> Darker greens w/ colored flakes<br><b>Hard Plastics:</b> Silver or Gold',
      requirements: data => {return data.feel == 'ib';} },

    nat: {
      title: 'Colors : Lights & Naturals',
      desc: '<b>Soft plastics:</b> Green, Brown, White, Pinks, or Chartreuse<br><b>Hard Plastics:</b> Red, White, Natrural, or Translucent',
      requirements: data => {return data.feel == 'c';} },


    lipless_crankbait: {
      title: 'Lipless Crankbait',
      desc: 'Best if used during spring or fall with rocky or wooded waters. For covering shallow water quickly, there isn’t much better than a lipless crankbait. They combine vibration, noise, and speed in a way that triggers arm-rocking strikes. ',
      requirements: data => {return ['m', 'ff'].indexOf(data.gender) > -1 && data.wind != 'hw' && data.time != 'dawn' && data.time != 'dusk' && data.intensity != 'l';} },

    squarebill: {
      title: 'Squarebill Crankbait',
      desc: 'Best if used during spring or fall with rocky or wooded waters. Square bills are the spinnerbaits of rip rap. The bill shape allows them to crawl over rocks effectively and deflect in a way that the big ones can’t resist.',
      requirements: data => {return ['m', 'ff'].indexOf(data.gender) > -1 && data.intensity != 'l' && data.time != 'dawn' && data.time != 'dusk';}
      //requirements : (data) => {return data.conditions != 'r'},
    },
    jerkbait: {

      title: 'Jerkbait',
      desc: 'Best if used during spring or fall with wind blowing. Jerkbaits are shaped like minnows, look like minnows, and act like wounded minnows. Bass like to eat wounded minnows; therefore jerkbaits catch lots of bass. ',
      requirements: data => {return ['m', 'ff'].indexOf(data.gender) > -1 && data.time != 'dawn' && data.time != 'dusk' && data.intensity != 'l';}
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    texas_rig: {
      title: 'Texas Rig',
      desc: 'Wether you use a senko, trick worm, crawfish, creature bait, fish it weighted or unweighted, the Texas Rig is the most versatile bait a bass fisherman can use.'
      //requirements : (data) => {return data.conditions != 'r'},
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    jig: {
      title: 'Jig',
      desc: 'Flip them, cast them, drag them, hop them, swim them – it all works. They catch bass in 40 degree water and 90 degree water, in grass, rocks, wood, and open water. You can fish them in 2 feet deep or drag the bottom in 40.'
      //requirements : (data) => {return data.conditions != 'r'},
    },

    crankbait: {
      title: 'Crankbait',
      desc: 'Best to use a shallow diver during the spring/fall and a deeper diver during the summer. If it wasn’t for jigs, crankbaits would probably hold the crown for best “year-round bait”. By changing your crankbaits with the seasons and water conditions, you can always find bass willing to bite.'
      //requirements : (data) => {return data.conditions != 'r'},
    },
    swimbait: {
      title: 'Swimbait',
      desc: 'Best if used during spring or fall with wind blowing. Despite being a relative newcomer in the bass tackle industry, swimbaits have already earned their place as big-time fish catchers. They can emulate a variety of baitfish species and as such are effective all 12 months of the year.',
      requirements: data => {return ['m', 'f'].indexOf(data.gender) > -1 && data.time != 'dawn' && data.intensity != 'l';}
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    drop_shot: {
      title: 'Drop Shot',
      desc: 'Best if used during summer when bass are in deep water. The drop shot rig is one of the most effective worm rigs for anglers battling a tough bite. It’s so effective that it has become the go-to technique for tournament anglers that need to put bass in the livewell.',
      requirements: data => {return ['f'].indexOf(data.gender) > -1 && data.intensity != 'l';}
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    spinnerbait: {
      title: 'Spinnerbait',
      desc: 'Best if used during windy and/or cloudy conditions or when water is muddy. Around flooded brush, laydowns, and wind gusts, there isn’t much better than a spinnerbait. They come through cover excellently and bass can’t resist their combination of flash and thump.',
      //requirements : (data) => {return data.conditions != 'r'},
      requirements: data => {return ['pc', 'o'].indexOf(data.gender) > -1 || data.wind == 'hw' || data.feel == 'w';}
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    chatterbait: {
      title: 'Chatterbait',
      desc: 'Best if used during the spring. Keep in mind that bladed swim jigs or vibrating jigs are most effective when bass are shallow and active. However, there are some exceptions to this rule, but savvy and experienced bass anglers can find many other good uses for vibrating jigs throughout the year.',
      requirements: data => {return ['m', 'ff'].indexOf(data.gender) > -1 && data.intensity != 'l' && data.time != 'dawn';}
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    buzzbait: {
      title: 'Buzzbait',
      desc: 'Best if used during the summer. Fishing a buzzbait just might be the most exciting style of bass fishing there is. They are one of the best topwater lures you can tie on, and any bass fisherman will agree that there is nothing like seeing a bass explode on a topwater lure.',
      requirements: data => {return ['f'].indexOf(data.gender) > -1 && data.intensity != 'l';}
      //requirements : (data) => {return ['dawn','dusk'].indexOf(data.time) > -1 || data.gender == 'f'},
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    wacky_rig: {
      title: 'Wacky Rig',
      desc: 'Best if used during spring or fall, use a weighted hook during the summer. The wacky rig is a very popular way to rig a rubber worm. This is when the hook is centered on the body of the worm, causing the to sag evenly on both sides.',
      requirements: data => {return data.wind != 'hw' && data.intensity != 'l' && data.time != 'dusk';}
      //requirements : (data) => {return data.conditions != 'r'},
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    ned_rig: {
      title: 'Ned Rig',
      desc: 'Best if used during the spring but can be used year-round. The Ned rig has quickly become unstoppable in its unrelenting dominance of the light line finesse fishing soft stickbait category.',
      requirements: data => {return data.wind != 'hw' && data.intensity != 'l' && data.time != 'dawn' && data.time != 'dusk';}
      //url          : 'https://www.runnersworld.com/content/hats/'
    },
    frog: {
      title: 'Frog',
      desc: 'Best if used during the summer or in the morning/late evening. If you fish lakes with any kind of vegetation, a frog may be the only bait you ever need. They are totally weedless, allowing anglers to access fish that are otherwise uncatchable.',
      //requirements : (data) => {return (data.gender == 'f') || (data.time == 'dawn','dusk')},
      requirements: data => {return ['dawn', 'dusk'].indexOf(data.time) > -1 || data.gender == 'f' && data.intensity != 'l';}
      //requirements : (data) => {return data.time == 'dawn','dusk'},
      //url          : 'https://www.runnersworld.com/content/sunglasses/'
    },
    popper: {
      title: 'Popper',
      desc: 'Best if used during windy and/or cloudy conditions or when water is muddy. These lures are designed to ripple the water’s surface, making popping and splashing sounds as they are retrieved. These baits are designed to create the appearance of prey in distress, a sound that is hard for a bass to resist.',
      requirements: data => {return ['dawn', 'dusk'].indexOf(data.time) > -1 || data.gender == 'f';}
      // url          : 'https://www.runnersworld.com/content/jackets/'
    },
    whopper_plopper: {
      title: 'Whopper Plopper',
      desc: 'Best if used during windy and/or cloudy conditions or when water is muddy. One of the most effective way to fish a whopper lopper is simply reeling them in a straight retrieve.',
      // url          : 'https://www.runnersworld.com/content/jackets/'
      requirements: data => {return ['dawn', 'dusk'].indexOf(data.time) > -1 || data.intensity == 'l';} } };


  // text values for results text
  const text_values = {
    gender: {
      m: 'SPRING',
      f: 'SUMMER',
      ff: 'FALL' },

    conditions: {
      c: 'SUNNY',
      pc: 'PARTLY CLOUDY',
      o: 'CLOUDY',
      r: 'RAINY' },

    wind: {
      lw: 'LIGHT WIND',
      hw: 'STRONG WIND' },

    time: {
      dawn: 'MORNING',
      day: 'DAY',
      dusk: 'EVENING' },

    intensity: {
      n: 'POND/LAKE',
      l: 'CREEK/RIVER' },

    feel: {
      c: 'CLEAR water',
      ib: 'STAINED water',
      w: 'MUDDY water' } };



  const form = document.getElementById('wtw-form');
  const form_wrap = document.getElementById('form-wrap');
  const errors = document.getElementById('form-error');
  const results = document.getElementById('results');
  const fields = form.querySelectorAll('select');

  /**
  * Display a form validation error
  *
  * @param   {String}  msg  The validation message
  * @return  {Boolen}       Returns false
  */
  function errorMessage(msg) {
    errors.innerHTML = msg;
    errors.style.display = '';
    return false;
  }

  /**
   * Safe HTML ouput
   */
  const safetext = function (text) {
    this.textContent = text;
    return this.innerHTML;
  }.bind(document.createElement('div'));

  /**
   * Form submission handler
   * Perform basic validation and setup data object
   */
  function formSubmit(e) {
    e.preventDefault();
    console.log('submit');
    errors.style.display = 'none';

    let data = {};
    let err = 0;
    // Check for empty or invalid fields
    [].forEach.call(fields, function (field) {
      let val = field.value;
      if (val == '') {
        field.classList.add('error');
        err++;
      } else {
        data[field.name] = val;
      }
    });
    if (err) {
      return errorMessage('All fields are required');
    }
    //if(data.conditions == 's' && data.temp > 45) {
    // return errorMessage('It cannot be that warm and snowing.');
    // }
    //if(['r','lr'].indexOf(data.conditions) > -1 && data.temp < 30) {
    // return errorMessage('It cannot be that cold and raining.');
    //}
    let picks = makePicks(data);

    displayResults(data, picks);
    return false;
  }

  /**
   * Get the temperature adjusted for wind, intensity, etc
   *
   * @param   {Object}  data  The submitted form data
   * @return  {Integer}       The adjusted temperature
   */
  function getAdjustedTemp(data) {
    let adjusted = parseInt(data.temp);

    //clear sunny day
    //if (data.time == 'day' && data.conditions == 'c') { adjusted += 10; }
    //partly cloudy day
    //else if (data.time == 'day' && data.conditions == 'pc') { adjusted += 5; }
    //clear, dawn or dusk
    //else if ((data.time == 'dawn' || data.time == 'dusk') && data.conditions == 'c') { adjusted += 5; }
    //partly cloudy, dawn or dusk
    // else if ((data.time == 'dawn' || data.time == 'dusk') && data.conditions == 'pc') { adjusted += 2; }
    // raining
    //else if (data.conditions == 'r') { adjusted -= 10; }
    // light raining
    //else if (data.conditions == 'lr') { adjusted -= 4; }
    // snowing
    // else if (data.conditions == 's') { adjusted -= 3; }

    // if light wind
    //if (data.wind == 'lw') { adjusted -= 5; }
    // if heavy wind
    //else if (data.wind == 'hw') { adjusted -= 9; }

    // if a race
    //if (data.intensity == 'r') { adjusted += 15; }
    // if a hard workout
    //else if (data.intensity == 'h') { adjusted += 8; }
    // if a long run
    //else if (data.intensity == 'l') { adjusted -= 5; }

    // if you like to feel cool, pretend temp is warmer
    //if (data.feel == 'c') { adjusted += 10; }
    // if you like to feel warm, pretend temp is cooler
    //else if (data.feel == 'w') { adjusted -= 10; }

    return adjusted;
  }

  /**
   * Make selections based on user input
   *
   * @param   {Object}  data  The submitted form data
   * @return  {Object}        The picked results
   */
  function makePicks(data) {
    data.adjusted = getAdjustedTemp(data);
    let picks = {};
    // Loop through blocks (head, torso, etc)
    Object.keys(blocks).forEach(block_id => {
      picks[block_id] = {};
      let pick = false;
      // Loop through possible block items (hat, visor, etc)
      for (let option of blocks[block_id]) {
        let item = items[option];
        if (!item) continue;

        // Special conditions override other checks
        if (item.special && item.special(data)) {
          pick = item;
          pick.key = option;
          break;
        }
        // Check if conditions meet item requirements
        if ((!item.min_temp || data.adjusted >= item.min_temp) && (
        !item.max_temp || data.adjusted <= item.max_temp) && (
        !item.hasOwnProperty('requirements') || item.requirements(data) == true)) {
          pick = item;
          pick.key = option;
          break;
        }
      }
      if (pick) {
        picks[block_id] = pick;
        // Add on long sleeve shirt, bra if necessary
        if (block_id == 'torso') {
          if (data.adjusted <= 40 && pick.key != 'ls') {
            picks.ls = items.ls;
          }
          if (data.gender == 'f' && pick.key != 'bra') {
            picks.bra = items.bra;
          }
          if (data.adjusted < 47 && pick.key != 'singlet') {
            picks['gloves'] = items.gloves;
          }
        }
      }
    });
    return picks;
  }

  /**
   * Display the results on the page
   *
   * @param   {Object}  data   The form data
   * @param   {Object}  picks  The picks based on form data
   */
  function displayResults(data, picks) {
    let markup = [];
    // Add intro pararaph
    markup.push(`<p class="wtw-results-intro">Here's what we recommend for ${introTextValue('gender', data)} fishing  in a ${introTextValue('intensity', data)} with ${introTextValue('feel', data)} on a ${introTextValue('conditions', data)} ${introTextValue('time', data)} with ${introTextValue('wind', data)}.<br></p>`);
    // Add images
    markup.push(getResultsImages(picks, data).outerHTML);
    // Add results text
    markup.push(`<div class="wtw-results-text">${getResultsText(picks).join('')}<a href="#" id="rs">&laquo; Revise Conditions</a></div>`);

    results.innerHTML = markup.join('');
    results.style.display = '';
    form_wrap.style.display = 'none';
  }

  /**
   * Get the appropriate text for the results intro paragraph
   */
  function introTextValue(field, data) {
    // get the submitted value
    let value = data[field];

    let text = '';
    if (field == 'temp') {
      text = `${value} degrees`;
    } else {
      text = text_values[field][value];
    }
    return safetext(text);
  }

  /**
   * Get the text for the picked items
   */
  function getResultsText(picks) {
    let text = [];
    for (let pick_id of Object.keys(picks)) {
      let pick = picks[pick_id];
      if (pick.title && pick.desc) {
        title = pick.url ? `<a href="${pick.url}" target="_blank">${pick.title}</a>` : pick.title;
        text.push(`<h4>${title}</h4><p>${pick.desc}</p>`);
      }
    }
    return text;
  }

  /**
   * Get the images for the picked items
   */
  function getResultsImages(picks, data) {
    let div = document.createElement('div');
    div.classList.add('wtw-results-image');

    // loop through the blocks
    for (let block_id of Object.keys(blocks)) {
      // skip block items that don't have images
      if (['face', 'sunblock', 'hands'].indexOf(block_id) > -1) {
        continue;
      }
      let block_val = picks[block_id].key ? picks[block_id].key.replace('_', '') : 'bare';
      let filename = `${data.gender}_${block_id}_${block_val}`;
      if (block_id == 'head' && picks.face.key == 'sunglasses') {
        filename += '_sunglasses';
      }
      if (block_id == 'torso' && picks.torso.key == 'ls' && picks.hasOwnProperty('gloves')) {
        filename += 'gloves';
      }
      //let image = new Image();
      //image.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-130/${filename}.png`
      //div.appendChild(image);
    }
    return div;
  }

  /**
   * Hide the results and reset the form
   */
  function resetForm(e) {
    if (e.target.id == 'rs') {
      e.preventDefault();
      results.style.display = 'none';
      form_wrap.style.display = '';
      results.innerHTML = '';
      // form.reset()
    }
  }

  /**
   * Remove error class on change
   */
  function formChange(e) {
    e.target.classList.remove('error');
  }

  // Add Event Listeners
  form.addEventListener('submit', formSubmit);
  form.addEventListener('change', formChange);
  results.addEventListener('click', resetForm, true);

})();