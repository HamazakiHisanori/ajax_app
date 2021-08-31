class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  #def new
  #end

  def create
    #createで定義された内容をa(バリュー:値)
    a = Post.create(content: params[:content])
    #Aをjs側にB(キー)として送る
    render json:{ b: a }
  end
end
