class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = current_post
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def edit
    @post = current_post
  end

  def update
    @post = current_post

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = current_post
    current_post.destroy
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

  def current_post
    Post.find(params[:id])
  end
end
