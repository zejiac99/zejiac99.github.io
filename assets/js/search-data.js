// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-just-a-moment",
        
          title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://zejiac99.substack.com/p/some-thoughts-on-deep-seek", "_blank");
          
        },
      },{id: "post-lt-i-gt-high-and-low-lt-i-gt",
        
          title: "&lt;i&gt;High And Low&lt;/i&gt;",
        
        description: "A close examination of Akira Kurosawa&#39;s mastery in cinematography and mise-en-scene",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/high-and-low/";
          
        },
      },{id: "post-french-new-wave-and-the-francois-truffaut-39-s-legacy",
        
          title: "French New Wave and the Francois Truffaut&#39;s legacy",
        
        description: "An investigation about The French New Wave and how its innovative, iconoclastic styles epitomizes in Francois Truffaut&#39;s Shoot the Piano Player",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/shoot-the-piano-player/";
          
        },
      },{id: "post-early-soviet-montage-movement",
        
          title: "Early Soviet Montage Movement",
        
        description: "A brief discussion about early Soviet montage movement &amp; comparisons of montage employment between Pudovkin and Eisenstein",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/soviet-montage/";
          
        },
      },{id: "post-lt-i-gt-bicycle-thieves-lt-i-gt-amp-de-sica-39-episodic-narrative-structure",
        
          title: "&lt;i&gt;Bicycle Thieves&lt;/i&gt; &amp; De Sica&#39; episodic narrative structure",
        
        description: "A short analysis on the episodic narrative structure of the classic Italian Neorealists film - Bicycle Thieves",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/bicycle-thieves/";
          
        },
      },{id: "post-thoughts-on-amp-quot-cinemas-of-attraction-amp-quot",
        
          title: "Thoughts on &amp;quot;Cinemas of Attraction&amp;quot;",
        
        description: "An excerpt and a reflection about &amp;quot;Cinemas of Attraction&amp;quot; by Tom Gunning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/cinema-of-attraction/";
          
        },
      },{id: "post-i-was-born-but",
        
          title: "I was Born, But...",
        
        description: "A commentary about Yasujiro Ozu&#39;s aptitude in parallel narrative structure, cinematography &amp; 360 degree system in the film I was Born, But...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/I-was-Born-But/";
          
        },
      },{id: "post-paris-is-burning",
        
          title: "Paris Is Burning",
        
        description: "A commentary about Paris Is Burning, a documentary about NY&#39;s queer community in the 90s",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/Paris-Is-Burning/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
