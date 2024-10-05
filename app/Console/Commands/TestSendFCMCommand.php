<?php
/**
 * LARABIZ CMS - Full SPA Laravel CMS
 *
 * @package    larabizcms/larabiz
 * @author     The Anh Dang
 * @link       https://larabiz.com
 */

namespace App\Console\Commands;

use Illuminate\Console\Command;
use LarabizCMS\Core\Models\Users\Guest;
use LarabizCMS\Core\Notifications\FcmNotification;
use App\Models\User;

class TestSendFCMCommand extends Command
{
    protected $name = 'test:fcm';

    protected $description = 'Test send FCM';

    public function handle()
    {
        $user = User::hasSubscribedTo('fcm')->first();

        if (! $user) {
            $this->error("No user has subscribed to FCM");
            return;
        }

        $user->notify(new FcmNotification('Welcome to LarabizCMS', 'Welcome to LarabizCMS.'));
    }
}
