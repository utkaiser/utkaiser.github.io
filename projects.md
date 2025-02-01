---
layout: page
permalink: /research/
title: research
class: projects
---

{:.hidden}
# Publications

{:.lead}
Here are some representative projects which I have worked on. A complete list of my publications is provided <a href="#bottom">at the bottom</a>. The most up-to-date publication list is available on my [Google Scholar profile](https://scholar.google.com/citations?user=AB4exREAAAAJ&hl=en). 

<div class="grid">
  {% for project in site.data.projects %}
    {% include project.html project=project %}
  {% endfor %}
</div>

<!-- Publications Section -->
<div id="bottom" class="pubs" style="margin-top: 60px;"> <!-- Add the "pubs" class -->
  <h2 style="text-align: left; margin-bottom: 20px;">List of Publications</h2>
  {% assign pubyears = site.publications | group_by:"year" %}
  {% assign sorted_pubyears = pubyears | reverse %}
  {% for year in sorted_pubyears %}
  <h3 class="year" style="margin-top: 20px; margin-bottom: 10px;">{{ year.name }}</h3>
  <ul>
    {% for pub in year.items %}
    <li class="publication" style="margin-bottom: 10px;">
      <strong>{{ pub.title }}</strong> <br>
      {% if pub.authors %}
        {% assign highlighted_authors = "" %}
        {% for author in pub.authors %}
          {% if author == "Luis Kaiser" %}
            {% assign highlighted_authors = highlighted_authors | append: "<span class='highlight'>" | append: author | append: "</span>" %}
          {% else %}
            {% assign highlighted_authors = highlighted_authors | append: author %}
          {% endif %}
          {% if forloop.last == false %}
            {% assign highlighted_authors = highlighted_authors | append: ", " %}
          {% endif %}
        {% endfor %}
        {{ highlighted_authors | raw }} <br>
      {% endif %}
      {% if pub.venue %} {{ pub.venue }}{% endif %} in {% if pub.venue_location %} {{ pub.venue_location }} {% endif %} {% if pub.year %} {{ pub.year }} {% endif %}
      {% if pub.pdf %} <a href="{{ pub.pdf }}" target="_blank">[Paper]</a>{% endif %}
      {% if pub.pdf %} <a href="{{ pub.code }}" target="_blank">[Code]</a>{% endif %}
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>
