---
layout: page
title: "Home"
class: home
---

# <span style="padding-top: 6px; display: block;">Luis Kaiser
<div class="columns" markdown="1">
<div class="intro" markdown="1">
<p>I am a PhD student in <a href="https://oden.utexas.edu/academics/phd-program/"  target="_blank" rel="noopener noreferrer">Computational Mathematics and AI</a> at the <a href="https://oden.utexas.edu/" target="_blank" rel="noopener noreferrer">Oden Institute</a>, <a href="https://www.utexas.edu/"  target="_blank" rel="noopener noreferrer">The University of Texas at Austin</a>. I currently design autonomous systems, including predictive planning, robotics and foundation models grounded in math advised by <a href="https://scholar.google.se/citations?user=6yls9oMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Richard Tsai</a>.</p>

<p>I completed my B.Sc. and M.Sc. in Mathematics at <a href="https://www.tum.de/" target="_blank" rel="noopener noreferrer">Technical University of Munich (TUM)</a> and <a href="https://www.uni-wuerzburg.de/" target="_blank" rel="noopener noreferrer">University of Wuerzburg</a>. For my <a href="https://link.springer.com/chapter/10.1007/978-3-031-86169-7_2" target="_blank" rel="noopener noreferrer">master's thesis</a>, I developed multi-step gradient descent for deep physical modeling advised by <a href="https://scholar.google.com/citations?user=S6MCm88AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Christian Klingenberg</a>. For my <a href="https://github.com/utkaiser/neurotrader_thesis" target="_blank" rel="noopener noreferrer">bachelor's thesis</a>, I created a method to stabilize policy convergence of a deep reinforcement agent from sparse, stochastic rewards together with <a href="https://scholar.google.de/citations?user=eWTzXFAAAAAJ" target="_blank" rel="noopener noreferrer">Andreas Hotho</a>.</p>

<p>I was also a Software Engineer at <a href="https://www.bloomberg.com/company/what-we-do/engineering-cto/" target="_blank" rel="noopener noreferrer">Bloomberg</a> in London where I built large-scale AI research and forecasting systems.</p>

</div>

<div class="me" markdown="1">
  <picture>
    <source srcset='/images/profile/lkaiser_profile.webp' type='image/webp' />
    <img
      src='/images/profile/lkaiser_profile.jpeg'
      alt='Luis Kaiser'
      style="max-width: 100%; height: auto;" />
  </picture>
  <p class="contact-info" >
    lkaiser (at) utexas.edu<br>
    <a href="https://scholar.google.com/citations?user=AB4exREAAAAJ&hl=en" target="_blank">Google Scholar</a>,
    <a href="https://www.linkedin.com/in/luiskaiser/" target="_blank">LinkedIn</a>
  </p>

</div>

</div>




## <a href="{{ "/research/" | relative_url }}">Publications</a> and Updates

<div class="featured-publications">
  {% assign sorted_publications = site.publications | sort: 'year' | reverse %}
  {% for pub in sorted_publications %}
      <div class="publication">
        <div class="publication-thumbnail">
          {% if pub.image %}
          <a href="{{ pub.link }}" target="_blank">
            <img src="{{ pub.image | relative_url }}" alt="{{ pub.title }} teaser" loading="lazy">
          </a>
          {% endif %}
        </div>
        <div class="publication-content">
          <strong><a href="{{ pub.link }}" target="_blank">{{ pub.title }}</a></strong>
          <span class="authors">{% if pub.authors %}{% for author in pub.authors %}{{ author }}{% unless forloop.last %}, {% endunless %}{% endfor %}.{% endif %}</span>
          <i>{% if pub.authors %}{% if pub.venue %}{{ pub.venue }}, {% endif %}{{ pub.year }}.{% endif %}</i>
          <div class="authors">
            {% if pub.paper %}<a href="{{ pub.paper }}" target="_blank">paper</a>{% endif %}{% if pub.code %}, <a href="{{ pub.code }}" target="_blank">code</a>{% endif %}{% if pub.arxiv_code %}, <a href="{{ pub.arxiv_code }}" target="_blank">arXiv</a>{% endif %}
          </div>
          {% for award in pub.awards %}<br/><span class="award"><i class="fas fa-{% if award == "Best Paper Award" %}trophy{% else %}award{% endif %}" aria-hidden="true"></i> {{ award }}</span>{% endfor %}
          <div class="authors">{% if pub.details %} {{ pub.details }} {% endif %}</div>
        </div>
      </div>
  {% endfor %}
</div>

<a href="{{ "/research/" | relative_url }}" class="button">
  <i class="fas fa-chevron-circle-right"></i>
  Show All Publications
</a>
