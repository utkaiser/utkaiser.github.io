---
layout: page
title: "Home"
class: home
---

#  Hi, I am Luis Kaiser
<div class="columns" markdown="1">
<div class="intro" markdown="1">
I'm Luis, a Ph.D. Student in the [Oden Institute](https://oden.utexas.edu/) at [The University of Texas at Austin](https://www.utexas.edu/). I design, develop, and evaluate deep physical modeling and RL in game theory advised by [Richard Tsai](https://web.ma.utexas.edu/users/ytsai/).

I received my B.Sc. and M.Sc. in Mathematics at [Technical University of Munich](https://www.tum.de/) and [University of Wuerzburg](https://www.uni-wuerzburg.de/) where I worked on RL-based trading and deep learning training algorithms for wave simulation. 

I was also a Data Scientist at [Bloomberg LP](https://www.bloomberg.com) in London, UK in the Analyst Workflow Team.

In my free time, I play soccer and read.
</div>
<div class="me" markdown="1" style="text-align: center;">
  <picture>
    <source srcset='/images/lkaiser_profile.webp' type='image/webp' />
    <img
      src='/images/lkaiser_profile.jpeg'
      alt='Luis Kaiser'
      style="max-width: 100%; height: auto;" />
  </picture>
  <!-- Icons in a row below the image -->
  <div class="icons" style="display: flex; justify-content: center; gap: 18px; margin-top: 15px;">
    <a href="https://scholar.google.com/citations?user=AB4exREAAAAJ&hl=en" target="_blank">
      <i class="fa-solid fa-graduation-cap" aria-hidden="true" style="font-size: 1.4em;"></i>
    </a>
    <a href="https://github.com/utkaiser" target="_blank">
      <i class="fa-brands fa-github" aria-hidden="true" style="font-size: 1.4em;"></i>
    </a>
    <a href="https://www.instagram.com/luiskaiser_/" target="_blank">
      <i class="fa-brands fa-instagram" aria-hidden="true" style="font-size: 1.4em;"></i>
    </a>
  </div>
</div>


</div>


## Featured <a href="{{ "/projects/" | relative_url }}">Projects</a>

<div class="featured-projects">
  {% assign sorted_projects = site.data.projects | sort: 'highlight' %}
  {% for project in sorted_projects %}
    {% if project.highlight %}
      {% include project.html project=project %}
    {% endif %}
  {% endfor %}
</div>

<a href="{{ "/projects/" | relative_url }}" class="button">
  <i class="fas fa-chevron-circle-right"></i>
  Show More
</a>
