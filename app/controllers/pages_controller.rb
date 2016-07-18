class PagesController < ApplicationController
  def contact
    render 'pages/contact', layout: 'layout_no_sidebar'
  end

  def home
  end

  def about
  end

  def course
  end
end