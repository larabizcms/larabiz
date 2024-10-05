<?php
/**
 * LARABIZ CMS - Full SPA Laravel CMS
 *
 * @package    larabizcms/larabiz
 * @author     The Anh Dang
 * @link       https://larabiz.com
 */

namespace App\Notifications;

use Illuminate\Notifications\Notification;

class DemoDatabaseNotification extends Notification
{
    public function via($notifiable): array
    {
        return ['database'];
    }

    public function toArray($notifiable): array
    {
        return [
            'title' => 'Hello Larabiz!',
            'message' => 'Hello Larabiz!',
        ];
    }
}
