---
layout: page
title: "Home"
class: home
---

# Hi, I am Luis Kaiser
<div class="columns" markdown="1">
<div class="intro" markdown="1">
<p>I'm a Ph.D. Student in <a href="https://oden.utexas.edu/academics/phd-program/">Computational Mathematics</a> at the <a href="https://oden.utexas.edu/">Oden Institute</a>, <a href="https://www.utexas.edu/">The University of Texas at Austin</a>. I currently design deep physical modeling and reinforcement learning in game theory advised by <a href="https://web.ma.utexas.edu/users/ytsai/">Richard Tsai</a>.</p>

<p>I received my B.Sc. and M.Sc. in Mathematics at <a href="https://www.tum.de/">Technical University of Munich</a> and <a href="https://www.uni-wuerzburg.de/">University of Wuerzburg</a> where I worked on machine learning-based trading and deep learning training algorithms for wave simulation.</p>

<p>I was also a Data Scientist at <a href="https://www.bloomberg.com">Bloomberg LP</a> in London, UK in the Analyst Workflow Team where I developed data-driven financial and ESG solutions.</p>

<p>In my free time, I play soccer and read.</p>

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
    <a href="https://www.linkedin.com/in/luiskaiser/" target="_blank">
      <i class="fa-brands fa-linkedin" aria-hidden="true" style="font-size: 1.4em;"></i>
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
