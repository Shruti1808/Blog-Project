import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  image: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  date: DS.attr('date'),
  timestamp: DS.attr('number'),
  reviews: DS.hasMany('review', { async: true }),
  tags: DS.hasMany('tag', { async: true })
});
