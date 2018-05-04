module CommentsHelper
  def user_can_edit_comment?(comment)
    user_signed_in? && (current_user.id == comment.user_id)
  end

  def user_full_name(comment)
    comment.user.name + ' ' + comment.user.surname
  end
end
